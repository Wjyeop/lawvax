import {
  useState,
  useRef,
  ChangeEvent,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import CheckBox from "../../../components/Admin/Common/CheckBox";
import Photo from "../../../assets/images/ic_admin_photo.svg";
import DropdownSrc from "../../../assets/images/ic_admin_dropdowArr.svg";
import { POST_REGISTER_CATEGORY } from "../../../const/admin";
import { createImage, getNewsItem } from "../../../api/admin";
import { generateFormData } from "../../../utils/admin";
import { createNews, updateNewsItem } from "../../../api/admin";

interface Contents {
  title: string;
  content: string;
  category: string;
  mainImg: File | null;
  isVisible: boolean;
}

export default function PostRegister() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const quillRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [contents, setContents] = useState<Contents>({
    title: "",
    content: "",
    category: "",
    mainImg: null,
    isVisible: true,
  });

  useEffect(() => {
    (async () => {
      if (state?.id) {
        const { data } = await getNewsItem(Number(state?.id));
        setContents(data);
        setPreviewUrl(data.mainImg);
      }
    })();
  }, [state?.id]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file && file.type.match("image.*")) {
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrl(imageUrl);
        setImageFile(file);
        e.target.value = "";
      }
    }
  };

  const handleSingleCheck = () => {
    setContents({ ...contents, isVisible: !contents.isVisible });
  };

  const uploadImage = async (image: File | null) => {
    if (image) {
      const formData = generateFormData(image);
      const { data } = await createImage(formData);

      return data;
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      if (input.files) {
        const file = input.files[0];

        try {
          const url = await uploadImage(file);
          const editor = quillRef?.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", url);
          editor.setSelection(range.index + 1);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, []);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, [imageHandler]);

  const handleCheck = (category: string) => {
    setContents({ ...contents, category });
  };

  const onClickSubmitButton = async () => {
    try {
      setIsLoading(true);
      let url;
      if (imageFile) {
        url = await uploadImage(imageFile);
      }
      const combinedData = {
        ...contents,
        mainImg: imageFile ? url : contents.mainImg,
      };
      if (state?.id) {
        await updateNewsItem(state?.id, combinedData);
      } else {
        await createNews(combinedData);
      }
      navigate("/admin/post-manegement");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="admin-common-container">
      <h2 className="admin-common-title">게시글 작성</h2>
      <div className="admin-post-registerCon">
        <div className="admin-photo-wrap">
          <img
            onClick={handleClick}
            src={previewUrl || Photo}
            alt="사진 이미지"
            className="admin-photo"
          />
          <span className="admin-photo-text">대표 사진 등록</span>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className="admin-post-btnLine">
          <div className="admin-post-selBtnWrap">
            <p>카테고리</p>
            <button
              type="button"
              className="admin-post-selBtn"
              onClick={() => setIsOpen(!isOpen)}
            >
              <p>
                {contents.category === "" ? (
                  "선택"
                ) : (
                  <span className="admin-post-selBtnText">
                    {contents.category}
                  </span>
                )}
              </p>
              <img src={DropdownSrc} alt="드롭다운 아이콘" />
            </button>
            <div>
              {isOpen && (
                <ul className="admin-post-dropList">
                  {POST_REGISTER_CATEGORY.map((category) => (
                    <div key={`work-${category}`}>
                      <li className="admin-post-dropItem">
                        <label className="admin-custom-checkbox">
                          <input
                            type="checkbox"
                            onClick={() => handleCheck(category)}
                            readOnly
                          />
                          <span className="admin-checkmark"></span>
                          {category}
                        </label>
                      </li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="admin-post-inputWrap">
            <p>제목</p>
            <input
              type="text"
              value={contents.title}
              onChange={(e) =>
                setContents({ ...contents, title: e.target.value })
              }
              placeholder="제목을 입력하세요"
            />
          </div>
        </div>
        <div style={{ marginTop: "16px" }}>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={contents.content}
            onChange={(value) =>
              setContents((prev) => ({ ...prev, content: value }))
            }
            modules={modules}
            style={{ height: "440px" }}
          />
        </div>
        <div className="admin-register-btnWrap">
          <button
            type="button"
            disabled={isLoading}
            onClick={onClickSubmitButton}
            className="admin-register-savebtn"
          >
            등록
          </button>
          <CheckBox label="비공개" handleSingleCheck={handleSingleCheck} />
        </div>
      </div>
    </section>
  );
}
