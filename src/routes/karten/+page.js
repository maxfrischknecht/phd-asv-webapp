/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
      post: {
        title: `Title for X goes here`,
        content: `Content for ${params} goes here`
      }
    };
  }