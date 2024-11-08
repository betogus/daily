import React from 'react';
import { ExperienceLevel } from './ExperienceLevel';


export type User = {
    user_id?: string;
    name?: string;
    password: string;
    username?: string;
    email: string;
    experienceLevel?: ExperienceLevel
    icon?: React.ReactNode;
};