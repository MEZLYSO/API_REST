class userController {
  constructor() {}

  insert(req, res) {
    const { id } = req.params;
    res.json({ message: `Insertando -> ${id}` });
  }

  view(req, res) {
    res.json({ message: "Mostrando usuario" });
  }

  update(req, res) {
    res.json({ message: "Actualizando usuario" });
  }

  delete(req, res) {
    res.json({ message: "Borrando usuario" });
  }
}

module.exports = new userController();
