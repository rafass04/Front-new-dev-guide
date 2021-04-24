class Artigos {
  constructor(logger) {
    this.logger = logger;
  }

  async list() {
    try {
      const response = await fetch(process.env.VUE_APP_ARTIGOS_API);
      const result = await response.json();
      return result && result.data;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async article(id) {
    try {
      const response = await fetch(`${process.env.VUE_APP_ARTIGOS_API}/${id}`);
      const result = await response.json();
      return result && result.data;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

export default Artigos;
