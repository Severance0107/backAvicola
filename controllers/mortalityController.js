const Mortality = require("../models/mortality");

module.exports = {
  async getAll(req, res, next) {
    try {
      console.log('hola')
      const data = await Mortality.getAll();
      console.log(`Mortalidad: ${data}`);
      return res.status(201).json(data);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener la Mortalidad",
      });
    }
  },

  async register(req, res, next) {
    try {
      const mortality = req.body;
      const data = await Mortality.create(mortality);

      return res.status(201).json({
        success: true,
        message: "El registro se ha realizado con exito",
        data: data.id,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al Registrar la Mortalidad",
        error: error,
      });
    }
  },


   
  async updateCantidadHembra(req, res, next) {
    try {
      const mortality = req.body;

      await Mortality.updateCantidadHembra(mortality);

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
      const mortality = req.body;

      await Mortality.updateCantidadMacho(mortality);

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
      const mortality = req.body;
      await Mortality.update(mortality);

      const data = {
        id: req.body.id,
        cantidadHembra: req.body.cantidadHembra,
        cantidadMacho: req.body.cantidadMacho,
      };

      return res.status(201).json({
        success: true,
        message: "La mortalidad se ha actualizado con éxito",
        data: data,
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al actualizar la mortalidad",
        error: error,
      });
    }
  },

  async delete(req, res, next) {
    try {
      const mortalityId = req.params.id;
      await Mortality.delete(mortalityId);

      return res.status(201).json({
        success: true,
        message: "La mortalidad se ha eliminado con éxito",
      });
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al eliminar la mortalidad",
        error: error,
      });
    }
  },

  async getById(req, res, next) {
    try {
      const mortalityId = req.params.id;
      const mortality = await Mortality.getById(mortalityId);

      if (!mortality) {
        return res.status(404).json({
          success: false,
          message: "No se encontró la mortalidad",
        });
      }

      return res.status(200).json(mortality);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener la mortalidad por ID",
        error: error,
      });
    }
  },
  async getTotalMortality(req, res, next) {
    try {
      const totalMortality = await Mortality.getTotalMortality();
      console.log(`Total de Mortalidad: ${totalMortality}`);
      return res.status(200).json(totalMortality);
    } catch (error) {
      console.log(`Error: ${error}`);
      return res.status(501).json({
        success: false,
        message: "Error al obtener el total de mortalidad",
        error: error,
      });
    }
  },
  async getMortalitiesByDay(req, res, next) {
    try {
      const mortalitiesByDay = await Mortality.getMortalitiesByDay();
      console.log(`Mortalidades por día: ${mortalitiesByDay}`);
      return res.status(200).json(mortalitiesByDay);
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