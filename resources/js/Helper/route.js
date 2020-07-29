import Master from "../Components/Layout/Master";
import Login from "../Components/Login";
import Profile from "../Components/Profile/Profile";

export default [{
        path: "/login",
        name: 'login',
        components: {
            default: Login,
        },
        meta: {
            isAnonymus: true
        }
    },
    {
        path: "/",
        components: {
            default: Master
        },
        meta: {
            requiresAuth: true
        },
        children: [{
            path: '/profile',
            name: 'profile',
            components: {
                default: Profile
            }
        }, ]
    },
];
