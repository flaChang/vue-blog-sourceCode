import {marked} from 'marked'
import blog from "@/api/blog"

export default {
  data() {
    return {
      title: '',
      rawContent: '',
      user: {},
      createAt: ''
    }
  },
  created() {
    this.blogId = this.$route.params.blogId
    blog.getDetail({blogId: this.blogId})
      .then(res => {
        this.title = res.data.title
        this.rawContent = res.data.content
        this.createAt = res.data.createAt
        this.user = res.data.user
      })
  },
  computed: {
    markdown() {
      return marked(this.rawContent)
    }
  }
}