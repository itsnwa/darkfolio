<template>
  <Layout>
    <h1>N W A</h1>
    <section class="projects">
      <article
        class="project"
        v-for="project in $page.projects.edges"
        :key="project.node.id"
      >
        <video
          class="project-thumbnail"
          :src="project.node.thumbnail_video.src"
          :poster="project.node.thumbnail.src"
          v-if="project.node.thumbnail_video"
          autoplay
          loop
          no-controls
        ></video>
        <g-image
          class="project-thumbnail"
          :src="project.node.thumbnail.src"
          v-if="!project.node.thumbnail_video"
        ></g-image>
        {{ project.node.title }}, {{ project.node.year }}
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
  margin: 2rem;
}
.project {
  width: 100%;
}
.project-thumbnail {
  display: block;
  width: 100%;
}
</style>
