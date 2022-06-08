module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      age: String,
      villequartier: String,
      termeDebrouille: String,
      quotidienDebrouille: String,
      debrouillardeDefinition: String,
      debrouillarde: String,
      astuceVieFacile: String,
      savoirfaire: String,
      moyenTransmission: String,
      dejaPartager: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Forms = mongoose.model("form", schema);
  return Forms;
};
