const Food = require("../models/food");

module.exports = {
  async getAll(req, res, next) {
    try {
      const data = await Food.getAll();
      console.log(`Alimento: ${data}`);
      return res.status(201).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener el Alimento",
      });
    }
  },

  async register(req, res, next) {
    try {
      const food = req.body;
      const data = await Food.create(food);

      return res.status(201).json({
        success: true,
        message: "El registro se ha realizado con exito",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al Registrar el alimento",
        error: error,
      });
    }
  },


   
  async updateCantidadHembra(req, res, next) {
    try {
      const food = req.body;

      await Food.updateCantidadHembra(food);

      const data = {
        id: req.body.id,
        cantidadhembra: req.body.cantidadhembra,
      };

      return res.status(201).json({
        success: true,
        message: "La actualizacion se ha realizado con exito",
        data: data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al momento de actualizar",
        error: error,
      });
    }
  },

  async updateCantidadMacho(req, res, next) {
    try {
      const food = req.body;

      await Food.updateCantidadMacho(food);

      const data = {
        id: req.body.id,
        cantidadmacho: req.body.cantidadmacho,
      };

      return res.status(201).json({
        success: true,
        message: "La actualizacion se ha realizado con exito",
        data: data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al momento de actualizar",
        error: error,
      });
    }
  },

  async update(req, res, next) {
    try {
      const food = req.body;
      await Food.update(food);

      const data = {
        id: req.body.id,
        cantidadHembra: req.body.cantidadHembra,
        cantidadMacho: req.body.cantidadMacho,
      };

      return res.status(201).json({
        success: true,
        message: "La alimento se ha actualizado con éxito",
        data: data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al actualizar la alimento",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const foodId = req.params.id;
      await Food.delete(foodId);

      return res.status(201).json({
        success: true,
        message: "La alimento se ha eliminado con éxito",
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al eliminar la alimento",
        error: error,
      });
    }
  },

  async getById(req, res, next) {
    try {
      const foodId = req.params.id;
      const food = await Food.getById(foodId);

      if (!food) {
        return res.status(404).json({
          success: false,
          message: "No se encontró la alimento",
        });
      }

      return res.status(200).json(food);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener la alimento por ID",
        error: error,
      });
    }
  },
  async getTotalFood(req, res, next) {
    try {
      const totalFood = await Food.getTotalFood();
      console.log(`Total de Alimento: ${totalFood}`);
      return res.status(200).json(totalFood);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener el total de alimento",
        error: error,
      });
    }
  },
  async getFoodByDay(req, res, next) {
    try {
      const foodByDay = await Food.getFoodByDay();
      console.log(`Mortalidades por día: ${foodByDay}`);
      return res.status(200).json(foodByDay);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener las mortalidades por día",
        error: error,
      });
    }
  },
};