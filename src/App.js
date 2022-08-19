import React from 'react';
import { useConfig } from './context';
import DirectionWraper from 'components/direction-wraper';
import SideNavConfigrator from 'components/sideNavConfigrator';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getRoutes, routes } from 'routes';
import Configrator from 'examples/configrators';
export default function App() {
  const { controller } = useConfig();
  const { layout } = controller;

  return (
    <DirectionWraper>
      {layout === 'dashboard' ? <SideNavConfigrator /> : layout === 'vr' ? <Configrator /> : null}
      {/* <ArgonBox /> */}
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </DirectionWraper>
  );
}
