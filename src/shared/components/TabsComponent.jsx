import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Componente genérico para mostrar tabs.
 *
 * @param {Array} tabs - Arreglo de objetos que definen los tabs, cada objeto debe tener una propiedad label y content.
 */
const TabsComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="tabs"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            id={`tab-${index}`}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <div
          role="tabpanel"
          hidden={activeTab !== index}
          id={`tabpanel-${index}`}
          key={tab.label}
        >
          {activeTab === index && (
            <Box sx={{ p: 0, mt: 2 }}>
              {tab.content}
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
};

export default TabsComponent;
