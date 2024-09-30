import { ReactComponent as People } from "../../assets/images/ic_admin_people.svg";
import { ReactComponent as List } from "../../assets/images/ic_admin_list.svg";
import { ReactComponent as Box } from "../../assets/images/ic_admin_box.svg";
import { ReactComponent as NewsLetter } from "../../assets/images/ic_admin_newsletter.svg";

export const MANAGEMENT_TAB_CONTENTS = [
  {
    Icon: People,
    label: "구성원 관리",
    link: "/admin/people-management",
  },
  {
    Icon: List,
    label: "업무분야 관리",
    link: "/admin/work-category-manegement",
  },
  {
    Icon: Box,
    label: "게시글 관리",
    link: "/admin/post-manegement",
  },
  {
    Icon: NewsLetter,
    label: "뉴스레터 관리",
    link: "/admin/news-letter-manegement",
  },
];
