// Define the structure of your items inside recon
export interface Item {
    title: string;
    description: string;
    commands: string;
    image: string;
  }
  
  // Define the structure of the data object
  export interface DataStructure {
    Visual: {
      recon: Item[];
      user: Item[];
      root: Item[];
      summary: Item[];
    };
    Bizness: {
      recon: Item[];
      recon: Item[];
      user: Item[];
      root: Item[];
      summary: Item[];
    };
    Surveillance: {
      recon: Item[];
      user: Item[];
      root: Item[];
      summary: Item[];
    };
  }