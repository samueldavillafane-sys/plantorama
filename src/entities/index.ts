/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: aromaticplants
 * Interface for PlantasAromticas
 */
export interface PlantasAromticas {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  plantName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  plantImage?: string;
  /** @wixFieldType text */
  uses?: string;
  /** @wixFieldType text */
  careInstructions?: string;
  /** @wixFieldType text */
  curiousFacts?: string;
}


/**
 * Collection ID: bibliography
 * Interface for Bibliografa
 */
export interface Bibliografa {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  sourceTitle?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType number */
  publicationYear?: number;
  /** @wixFieldType url */
  url?: string;
  /** @wixFieldType text */
  referenceDetails?: string;
}


/**
 * Collection ID: coastalvegetation
 * Interface for VegetacinCostera
 */
export interface VegetacinCostera {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  vegetationName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  vegetationImage?: string;
  /** @wixFieldType text */
  habitatDetails?: string;
  /** @wixFieldType text */
  careInstructions?: string;
  /** @wixFieldType text */
  curiousFacts?: string;
}


/**
 * Collection ID: crops
 * Interface for Cultivos
 */
export interface Cultivos {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  cropName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  cropImage?: string;
  /** @wixFieldType text */
  cultivationDetails?: string;
  /** @wixFieldType text */
  careInstructions?: string;
  /** @wixFieldType text */
  curiousFacts?: string;
}


/**
 * Collection ID: generalrecommendations
 * Interface for RecomendacionesGenerales
 */
export interface RecomendacionesGenerales {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  appliesTo?: string;
  /** @wixFieldType date */
  lastUpdated?: Date | string;
}


/**
 * Collection ID: naturalplants
 * Interface for PlantasNaturales
 */
export interface PlantasNaturales {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  plantName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  plantImage?: string;
  /** @wixFieldType text */
  careInstructions?: string;
  /** @wixFieldType text */
  curiousFacts?: string;
  /** @wixFieldType text */
  description?: string;
}
