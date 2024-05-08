import mongoose, { Document, Schema } from 'mongoose';


interface QuestionDocument extends Document {
  questionId: string;
  questionName: string;
  title: string;
  description: string;
  platformLink: string;
  solved: boolean;
  tags: string[];
  testCases: string[];
  answer: string;
  example: string;
  constraints: string;
}

const QuestionSchema: Schema<QuestionDocument> = new Schema({
  questionId: { 
    type: String, 
    required: true, 
    unique: true 
},
  questionName: { 
    type: String, 
    required: true 
},
  title: { 
    type: String, 
    required: true 
},
  description: 
  { type: String, 
    required: true 
},
  platformLink: { 
    type: String, 
    required: true 
},
  solved: { 
    type: Boolean, 
    default: false 
},
  tags: { 
    type: [String], 
    default: [] 
},
  testCases: { 
    type: [String], 
    default: [] 
},
  answer: { 
    type: String, 
    required: true 
},
  example: { 
    type: String, 
    required: true 
},
  constraints: { 
    type: String, 
    required: true 
}
});

const QuestionModel = mongoose.model<QuestionDocument>('Question', QuestionSchema);
export default QuestionModel;
