<template>
  <div class="">
    <section class="page-title-inner position-relative">
      <div class="page-titleShape">
        <img src="@/assets/img/breadcrumb-shape.png" alt="" />
      </div>
    </section>
    <div class="zoom-posts">
      <div class="container-fluid">
        <div class="blogs" v-for="blog in blogs" :key="blog.id">
          <div class="blog-list">
            <span> {{ blog.date }} </span> <a href="#"> {{ blog.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "view-blog",
  data() {
    return {
      blogs: [
        { date: "2020-04-30", title: "title blog" },
        { date: "2020-04-30", title: "title blog" },
        { date: "2020-04-30", title: "title blog" },
      ],
    };
  },
};
</script>
