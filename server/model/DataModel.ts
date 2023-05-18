import mongoose, { Schema, Document } from 'mongoose';

export interface EnergyData extends Document {
    end_year: string;
    intensity: number;
    sector: string;
    topic: string;
    insight: string;
    url: string;
    region: string;
    start_year: string;
    impact: string;
    added: string;
    published: string;
    country: string;
    relevance: number;
    pestle: string;
    source: string;
    title: string;
    likelihood: number;
}

const EnergyDataSchema: Schema = new Schema({
    end_year: { type: String,  },
    intensity: { type: Number,  },
    sector: { type: String,  },
    topic: { type: String,  },
    insight: { type: String,  },
    url: { type: String,  },
    region: { type: String,  },
    start_year: { type: String,  },
    impact: { type: String,  },
    added: { type: String,  },
    published: { type: String,  },
    country: { type: String,  },
    relevance: { type: Number,  },
    pestle: { type: String,  },
    source: { type: String,  },
    title: { type: String,  },
    likelihood: { type: Number,  },
});

const DataModel = mongoose.model<EnergyData>('Data', EnergyDataSchema);

export default DataModel;
