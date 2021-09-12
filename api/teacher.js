import request from '@/utils/request'

export default {
    //分页讲师查询的方法
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  //讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  },
// //根据老师id查找姓名
//   getTeacherName(name){
//     return request({
//       url: `/eduservice/edu-teacher/selTeacherByTeacherID`,
//       method: 'get',
//       data: name
//     })
//   }
}
