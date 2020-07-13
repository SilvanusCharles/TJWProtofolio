<template>
  <div>
    <section class="page-title-inner position-relative">
      <div class="page-titleShape">
        <img src="@/assets/img/breadcrumb-shape.png" alt="" />
      </div>
    </section>
    <div class="zoom-posts">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2 class="title">Projects</h2>
            </div>
          </div>
        </div>
        <div class="row align-items-center mbn-50">
          <div
            class="col-lg-3 col-sm-6"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="portfolio-item">
              <div class="portfolio-item__thumb">
                <a :href="project.urlLink"
                  ><img :src="project.urlImage" alt="portfolio image"
                /></a>
              </div>
              <div class="portfolio-item__content">
                <h4 class="portfolio-title">
                  <a :href="project.urlLink">{{ project.title }}</a>
                </h4>
                <p>{{ project.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import portfolio_1 from "../../assets/img/portfolio/portfolio-1.jpg";
import portfolio_2 from "../../assets/img/portfolio/portfolio-2.jpg";
import portfolio_3 from "../../assets/img/portfolio/portfolio-3.jpg";

export default {
  name: "view-blog",
  data() {
    return {
      projects: [
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_1,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_2,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_3,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_1,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_2,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_3,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_1,
          urlLink: "#",
        },
        {
          date: "2020-04-30",
          title: "Title project",
          urlImage: portfolio_2,
          urlLink: "#",
        }
      ],
    };
  },
};
</script>
