const express = require('express');
const router = express.Router();
const Orga = require('../models/Organisation'); 
const Animal = require('../models/Animal');
const User = require('../models/User');

router.post('/create', async (req, res) => {
  try {
    const { siret, nom, date } = req.body;
    const newOrganisation = new Orga({
      siret,
      nom,
      date,
    });
    const savedOrganisation = await newOrganisation.save();
    return res.status(201).json(savedOrganisation);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erreur lors de la création de l\'organisation' });
  }
});

router.get('/:siret', async (req, res) => {
  try {
    const { siret } = req.params;

    const organisation = await Orga.findOne({ siret });
    if (!organisation) {
      return res.status(404).json({ message: 'Organisation non trouvée' });
    }
    return res.status(200).json(organisation);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Erreur lors de la récupération de l\'organisation' });
  }
});


router.post('/add-animal', async (req, res) => {
  try {
    const { userId, animal } = req.body;

    const user = await User.findById(userId).populate('organisationId');
    if (!user || user.role !== 'organisme') {
      return res.status(403).json({ message: 'Accès interdit : uniquement pour les organismes' });
    }

    const organisation = user.organisationId;
    if (!organisation) {
      return res.status(400).json({ message: 'Organisation introuvable' });
    }

    const newAnimal = new Animal({
      name: animal.name,
      age: animal.age,
      race: animal.race,
      imageUrl: animal.imageUrl,
      likes: [],
      dislikes: []
    });
    const savedAnimal = await newAnimal.save();

    organisation.animals.push(savedAnimal._id);
    await organisation.save();

    return res.status(201).json({ message: 'Animal ajouté avec succès', animal: savedAnimal });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'animal' });
  }
});


module.exports = router;

