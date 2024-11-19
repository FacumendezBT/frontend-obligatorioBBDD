import React, { useState } from 'react';
import styles from 'shared/styles/Tabs.module.css';

const TabsComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label) => {
    setActiveTab(label);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${tab.label === activeTab ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs.map((tab) => {
          if (tab.label !== activeTab) return null;
          return (
            <div key={tab.label} className={styles.tabPanel}>
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabsComponent;
