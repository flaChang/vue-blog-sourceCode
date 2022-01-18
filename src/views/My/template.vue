<template>
  <div id="my">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{ user.username }}</h3>
    </section>
    <section>
      <div class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <div class="date">
          <span class="day">{{ splitDate(blog.createdAt).date }}</span>
          <span class="month">{{ splitDate(blog.createdAt).month }}月</span>
          <span class="year">{{ splitDate(blog.createdAt).year }}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
          <router-link :to="`/edit/${blog.id}`">编辑</router-link>
          <span class="placeHolder">111</span>
          <a href="#" @click.prevent="onDelete(blog.id)">删除</a>
        </div>
      </div>
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

<style src="./template.less" lang="less"></style>


