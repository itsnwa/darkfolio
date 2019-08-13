<template>
  <Layout>
    <section class="projects">
      <g-link
        :to="project.node.path"
        tag="article"
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
        <ProjectMeta
          :title="project.node.title"
          :categories="project.node.categories"
          :year="project.node.year"
        />
      </g-link>
    </section>
  </Layout>
</template>

<page-query>
query Projects {
  projects: allProject {
    edges {
      node { 
        id
        path
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
import ProjectMeta from "@/components/ProjectMeta";

export default {
  components: {
    ProjectMeta
  },
  metaInfo: {
    titleTemplate: "NWA"
  }
};
</script>

<style lang="scss" scoped>
.projects {
  margin: 0 2rem;
}
.project {
  width: 100%;
  margin-bottom: 4rem;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
</style>
