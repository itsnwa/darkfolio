<template>
  <Layout :title="$page.project.title">
    <article class="project-post">
      <g-image
        class="thumnail"
        :src="$page.project.thumbnail"
        :alt="$page.project.title"
      />
      <ProjectMeta
        :title="$page.project.title"
        :categories="$page.project.categories"
        :year="$page.project.year"
      />
      <div class="content" v-html="$page.project.content" />
    </article>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project(path: $path) {
    title
    thumbnail
    thumbnail_video
    year
    categories
    content
  }
}
</page-query>

<script>
import ProjectMeta from "@/components/ProjectMeta";

export default {
  components: {
    ProjectMeta
  }
};
</script>

<style lang="scss" scoped>
.project-post {
  padding: 0 2rem;
  img {
    display: block;
    width: 100%;
  }
}
</style>