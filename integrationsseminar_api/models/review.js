import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    product: {
        type: Object,
            name: {
                type: String
            },
            preis: {
                type: Number
            }, 
            art: {
                type: String,
                
            }
        },
    personalbezogene_aspekte: {
        type: Object,
            nutzer: {
                type: Object,
                    autonomie: {
                        type: Number,
                    },
                    selbststaendigkeit: {
                        type: Number,
                    },
                    psychische_sicherheit: {
                        type: Number,
                    },
                    pyschische_entlastung: {
                        type: Number,
                       
                    },
                    gesellschaftlich: {
                        type: Number,
                        
                    gefahr: {
                        type: Number,
                        
                    },
                    medikamentenkonsum: {
                        type: Number,
                        
                    },
                    zumutbarkeit: {
                        type: Number,
                       
                    },
                    akzeptanz: {
                        type: Number,
                       
                    },
                    privatsphaere: {
                        type: Number,
                
                    },
                    komfortabel: {
                        type: Number, 
                    }
                }
            },
            angehoerige: {
                type: Object,
               
                    entlastung_angehoerige: {
                        type: Number,
                        
                    },
                    ermoeglichung_fuehrsorge: {
                        type: Number,
                       
                    }
                
            },
            pflegepersonal: {
                type: Object,
                
                    entlastung: {
                        type: Number,
                        
                    },
                    akzeptanz: {
                        type: Number,
                    }
                }
            },
    technologische_aspekte: {
        type: Object,
            schnelle_verfuegbarkeit: {
                type: Number,
              
            },
            robustheit: {
                type: Number,
                
            },
            wohnraum:{
                type: Number,
                
            },
            infrastruktur:{
                type: Number,
                
            },
            hardware_software:{
                type: Number,
               
            },
            service:{
                type: Number,
                
            },
            ausfall:{
                type: Number,
                
            },
            einrichtung:{
                type: Number,
            },
            bedienung: {
                type: Number,
            },
            bedienungsfreundlichkeit: {
                type: Number,
            },
            beziehung: {
                type: Number,
            },
            datensicherheit: {
                type: Number,
            },
            datentransparenz: {
                type: Number,
            },
            leistungsfaehigkeit: {
                type: Number,
            },
            design: {
                type: Number,
            }
    },
    ökonomische_aspekte: {
        type: Object,
            anschaffungskosten: {
                type: Number,
            },
            service: {
                type: Number,
            },
            kostenuebernahme: {
                type: Number,
            },
            laufende_kosten: {
                type: Number,
            },
            betriebskosten: {
                type: Number,
            },
            betreuungsaufwand: {
                type: Number,
            },
            wartungsaufwand: {
                type: Number,
            }
    }
}, { timestamps : true})


const Review = mongoose.model('Review', reviewSchema)

export default Review
