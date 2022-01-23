import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const body = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/send_review", (req, res) => {
  const bodys = {
    id: body.length + 1,
    product: {
      name: req.body.product.name,
      preis: req.body.product.preis,
      art: req.body.product.art,
    },
    personalbezogene_aspekte: {
      nutzer: {
        akzeptanz: req.body.personalbezogene_aspekte.nutzer.akzeptanz,
        autonomie: req.body.personalbezogene_aspekte.nutzer.autonomie,
        gefahr: req.body.personalbezogene_aspekte.nutzer.gefahr,
        gesellschaftlich:
          req.body.personalbezogene_aspekte.nutzer.gesellschaftlich,
        komfortabel: req.body.personalbezogene_aspekte.nutzer.komfortabel,
        medikamentenkonsum:
          req.body.personalbezogene_aspekte.nutzer.medikamentenkonsum,
        privatsphaere: req.body.personalbezogene_aspekte.nutzer.privatsphaere,
        psychische_sicherheit:
          req.body.personalbezogene_aspekte.nutzer.psychische_sicherheit,
        pyschische_entlastung:
          req.body.personalbezogene_aspekte.nutzer.pyschische_entlastung,
        selbststaendigkeit:
          req.body.personalbezogene_aspekte.nutzer.selbststaendigkeit,
        zumutbarkeit: req.body.personalbezogene_aspekte.nutzer.zumutbarkeit
      },
      angehoerige: {
        entlastung_angehoerige:
          req.body.personalbezogene_aspekte.angehoerige.entlastung_angehoerige,
        ermoeglichung_fuehrsorge:
          req.body.personalbezogene_aspekte.angehoerige
            .ermoeglichung_fuehrsorge
      },
      pflegepersonal: {
        akzeptanz: req.body.personalbezogene_aspekte.pflegepersonal.akzeptanz,
        entlastung: req.body.personalbezogene_aspekte.pflegepersonal.entlastung
      },
    },
    technologische_aspekte: {
      ausfall: req.body.technologische_aspekte.ausfall,
      bedienung: req.body.technologische_aspekte.bedienung,
      bedienungsfreundlichkeit: req.body.technologische_aspekte.bedienungsfreundlichkeit,
      beziehung: req.body.technologische_aspekte.beziehung,
      datensicherheit: req.body.technologische_aspekte.datensicherheit,
      datentransparenz: req.body.technologische_aspekte.datentransparenz,
      design: req.body.technologische_aspekte.design,
      einrichtung: req.body.technologische_aspekte.einrichtung,
      hardware_software: req.body.technologische_aspekte.hardware_software,
      infrastruktur: req.body.technologische_aspekte.infrastruktur,
      leistungsfaehigkeit: req.body.technologische_aspekte.leistungsfaehigkeit,
      robustheit: req.body.technologische_aspekte.robustheit,
      schnelle_verfuegbarkeit: req.body.technologische_aspekte.schnelle_verfuegbarkeit,
      service: req.body.technologische_aspekte.service,
      wohnraum: req.body.technologische_aspekte.wohnraum
    },
    ökonomische_aspekte: {
      anschaffungskosten: req.body.ökonomische_aspekte.anschaffungskosten,
      service: req.body.ökonomische_aspekte.service,
      betreuungsaufwand: req.body.ökonomische_aspekte.betreuungsaufwand,
      betriebskosten: req.body.ökonomische_aspekte.betriebskosten,
      kostenuebernahme: req.body.ökonomische_aspekte.kostenuebernahme,
      laufende_kosten: req.body.ökonomische_aspekte.laufende_kosten,
      wartungsaufwand: req.body.ökonomische_aspekte.wartungsaufwand
    }
  };

  body.push(bodys);
  res.send(bodys);
  console.log(body);
});

app.listen(3001, () => {
  console.log("Listening on Port 3001");
});