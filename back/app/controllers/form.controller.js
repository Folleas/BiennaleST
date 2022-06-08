const db = require("../models");
const Form = db.tutorials;

// Create and Save a new Form
exports.create = (req, res) => {
  // Validate request
  // Create a Form
  const form = new Form({
    age: req.body.age,
    villequartier: req.body.villequartier,
    termeDebrouille: req.body.termeDebrouille,
    quotidienDebrouille: req.body.quotidienDebrouille,
    debrouillardeDefinition: req.body.debrouillarde,
    debrouillarde: req.body.debrouillarde,
    astuceVieFacile: req.body.astuceVieFacile,
    savoirfaire: req.body.savoirfaire,
    moyenTransmission: req.body.moyenTransmission,
    dejaPartager: req.body.dejaPartager,
    schema: req.body.schema,
  });

  // Save Form in the database
  form
    .save(form)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Form."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Form.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Form with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Form.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Form with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Form with id=" + id });
    });
};

// Update a Form by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Form.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Form with id=${id}. Maybe Form was not found!`
        });
      } else res.send({ message: "Form was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Form with id=" + id
      });
    });
};

// Delete a Form with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Form.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Form with id=${id}. Maybe Form was not found!`
        });
      } else {
        res.send({
          message: "Form was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Form with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Form.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Form.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
