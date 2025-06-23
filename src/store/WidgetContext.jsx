import React, { createContext, useContext, useState } from 'react';

const WidgetContext = createContext();

const initialCategories = [
  {
    id: 1,
    name: 'CSPM Executive Dashboard',
    widgets: [
      { id: 1, name: 'Widget 1', text: 'This is widget 1' },
      { id: 2, name: 'Widget 2', text: 'This is widget 2' }
    ]
  },
  {
    id: 2,
    name: 'Security Overview',
    widgets: [{ id: 3, name: 'Widget 3', text: 'This is widget 3' }]
  },
  {
    id: 3,
    name: 'CWPP Dashboard',
    widgets: [{ id: 4, name: 'Widget 4', text: 'This is widget 4' }]
  }
];

export const WidgetProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories);

  const addWidget = (categoryId, widget) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === categoryId
          ? {
              ...category,
              widgets: [...category.widgets, widget]
            }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(widget => widget.id !== widgetId)
            }
          : category
      )
    );
  };

  return (
    <WidgetContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </WidgetContext.Provider>
  );
};

export const useWidgetContext = () => useContext(WidgetContext);