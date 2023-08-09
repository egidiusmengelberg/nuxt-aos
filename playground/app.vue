<template>
  <main>
    <article data-aos="fade-up">
      <p>fade-up</p>
    </article>

    <article data-aos="fade-down">
      <p>fade-down</p>
    </article>

    <article data-aos="fade-left">
      <p>fade-left</p>
    </article>

    <article data-aos="fade-right">
      <p>fade-right</p>
    </article>

    <article data-aos="flip-left">
      <p>flip-left</p>
    </article>

    <article data-aos="flip-right">
      <p>flip-right</p>
    </article>

    <article data-aos="zoom-in">
      <p>zoom-in</p>
    </article>

    <article data-aos="zoom-up">
      <p>zoom-up</p>
    </article>
  </main>
</template>

<style>

body {
  margin: 0;
  background: #377771;
}

main {
  max-width: 80vw;
  margin: 2em auto;
  display: grid;
  grid-template-columns: auto auto;
  gap: 1em;
}

article {
  aspect-ratio: 1/1;
  background: #ED6A5E;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  font-size: 1.5em;
}

</style>
