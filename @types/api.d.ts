interface Item {
  _id?: string;
  title?: string;
  img?: ImageType;
  link?: string;
  category?: string;
}

type GetItems = {
  data: Item[];
  status: number;
};
