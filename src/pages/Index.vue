<template>
  <Layout>
    <section class="projects">
      <article
        class="project"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <video
          class="project-thumbnail"
          :src="project.node.thumbnail_video.src"
          v-if="project.node.thumbnail_video"
          autoplay
          loop
          playsinline
        ></video>
        <g-image
          class="project-thumbnail"
          :src="project.node.thumbnail.src"
          v-if="!project.node.thumbnail_video"
        ></g-image>
        <div class="project-meta">
          <h2 class="project-title">{{ project.node.title }}</h2>
          <ul class="project-categories">
            <li
              class="project-category"
              v-for="(category, index) in project.node.categories"
              :key="index"
            >
              {{ category }}
            </li>
          </ul>
          <time class="project-year" :datetime="project.node.year">{{
            project.node.year
          }}</time>
        </div>
      </article>
    </section>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        title
        year
        thumbnail
        thumbnail_video
        categories
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    titleTemplate: "NWA"
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 12rem 2rem;
}
.project {
  width: 100%;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
.project-meta {
  display: flex;
  padding: 4rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.5;
}
.project-title {
  flex: 0 0 50%;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}
.project-categories {
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}
.project-category {
  padding: 0;
  margin: 0;
}
.project-year {
  flex: 1;
  text-align: right;
  opacity: 0.4;
}
</style>
