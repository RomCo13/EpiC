export interface sectionNode {
  name: string;
  children?: sectionNode[];
}
export const side_nav_data={
  TREE_DATA:  [
    {
      name: 'צפון',
      children: [
        {name: 'צפת'},
        {name: 'כנרת'},
      ]
    },
    {
      name: 'חיפה',
      children: [
        {name: 'חיפה'},
        {name: 'חדרה'},
      ]
    },
    {
      name: 'מרכז',
      children: [
        {name: 'שרון',
        children:[
          {name:'צוות חקירה אלוף'},
          {name:'צוות חקירה מנצח'},
          {name:'צוות חקירה ענק'},
        ]
      },
        {name: 'רמלה'},
        {name: 'רחובות'},
      ]
    },
    {
      name: 'ירושלים',
    },
    {
      name: 'אשקלון',
    },
    {
      name: 'דרום',
    },
  ],
  message:'תמונת מצב מחוזות',
  text:'סהכ חקירות פתוחות : '
}


