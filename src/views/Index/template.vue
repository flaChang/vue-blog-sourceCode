<template>
  <div id="index">
    <section class="blog-posts">
      <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.id">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{ blog.user.username }}</figcaption>
        </figure>
        <h3>{{ blog.title }}<span>{{friendlyDate(blog.createdAt)}}</span></h3>
        <p>{{ blog.description }}</p>
      </router-link>
    </section>
    <section class="pagination">
      <div class="block">
        <el-pagination
            :current-page="page"
            @current-change="onPageChange"
            layout="prev, pager, next"
            :total="total"></el-pagination>
      </div>
    </section>
  </div>
</template>

<script src="./template.js"></script>
<style src="./template.less" lang="less" scoped></style>

