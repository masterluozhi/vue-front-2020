import request from '@/utils/request'

export default {
  pageComment(page,limit,courseid) {
    return request({
      url: `/educomment/pageComment/${page}/${limit}`,
      method: 'post',
      data: courseid
    })
  },
  addComment(courseid,eduComment) {
    return request({
      url: `/educomment/addComment/BycourseId/${courseid}`,
      method: 'post',
      data: eduComment
    })
  }
}
