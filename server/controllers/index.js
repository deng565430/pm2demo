const indexController = {
  index () {
    return async (ctx, next) => {
      const title = 'hello world';
      await ctx.render('index', {
        title
      })
    }
  }
}

module.exports = indexController;