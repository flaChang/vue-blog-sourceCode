<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=4 v-model="description" :autosize="{minRows:2,maxRows:6}"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20 v-model="content" :autosize="{minRows:4,maxRows:30}"></el-input>
    <p>
      <label>是否展示到首页</label>
      <el-switch
          v-model="atIndex"
          class="ml-2"
          active-color="#13ce66"
          inactive-color="#ff4949"
      />
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="../Edit/template.less" lang="less"></style>


