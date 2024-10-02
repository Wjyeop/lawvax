import { samplePeopleData } from "../../const/samplePeopleData";

export default function PeopleTable() {
  return (
    <table className="admin-people-table">
      <thead>
        <tr className="admin-table-head">
          <th>번호</th>
          <th>이미지</th>
          <th>직책</th>
          <th>이름</th>
          <th>이메일</th>
          <th></th>
          <th>공개유무</th>
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {samplePeopleData.map((item, idx) => (
          <tr key={item.name + idx} className="admin-table-body">
            <td>{idx + 1}</td>
            <td className="admin-table-image">
              <img src={item.image} alt="profile" />
            </td>
            <td>{item.position}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td></td>
            <td>{item.isPublic ? "공개" : "비공개"}</td>
            <td>
              <button className="admin-table-edit">수정</button>
            </td>
            <td>
              <button className="admin-table-del">삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
