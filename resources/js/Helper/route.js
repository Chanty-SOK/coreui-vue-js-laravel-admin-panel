import Master from "../Components/Layout/Master";
import Login from "../Components/Login";
import UserList from '../Components/User/List';
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
        name: "master",
        components: {
            default: Master
        },
        meta: {
            isAnonymus: true
        },
        children: [{
                path: '/profile',
                name: 'profile',
                components: {
                    default: Profile
                }
            },
            {
                path: 'admin/user',
                name: 'List',
                components: {
                    default: UserList
                }
            },
        ]
    },
];
