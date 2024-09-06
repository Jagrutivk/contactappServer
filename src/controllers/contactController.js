const contact_data = require("../models/Contact");

//Create a new contact
exports.createContact = async (req, res) => {
  try {
    const {
      contact_id,
      first_name,
      last_name,
      date_of_birth,
      gender,
      email,
      contact_no,
      profession,
      street_add_1,
      street_add_2,
      city,
      state,
      country,
      zip_code,
      social_media_link,
    } = req.body;

    const contactExits = await contact_data.findOne({ where: { email } });
    if (contactExits) {
      return res
        .status(400)
        .json({ message: "Contact with this email already exits" });
    }
    const contact = await contact_data.create({
      contact_id,
      first_name,
      last_name,
      date_of_birth,
      gender,
      email,
      contact_no,
      profession,
      street_add_1,
      street_add_2,
      city,
      state,
      country,
      zip_code,
      social_media_link,
    });
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all contacts

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await contact_data.findAll();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
