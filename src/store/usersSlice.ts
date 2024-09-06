import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface UsersState {
    users: User[];
    filteredUsers: User[];
    loading: boolean;
    error: string | null;
    filters: {
        name: string;
        username: string;
        email: string;
        phone: string;
    };
}

const initialState: UsersState = {
    users: [],
    filteredUsers: [],
    loading: false,
    error: null,
    filters: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    return result as User[];
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFilter: (
            state,
            action: PayloadAction<{ key: keyof UsersState['filters']; value: string }>,
        ) => {
            const { key, value } = action.payload;
            state.filters[key] = value;
            state.filteredUsers = state.users.filter((existingUser) =>
                Object.keys(state.filters).every((key) =>
                    existingUser[key as keyof UsersState['filters']]
                        .toLowerCase()
                        .includes(state.filters[key as keyof typeof state.filters].toLowerCase()),
                ),
            );
        },
        removeUser: (state, action: PayloadAction<{ id: number }>) => {
            const { id } = action.payload;
            state.users = state.users.filter((user) => user.id !== id);
            state.filteredUsers = state.filteredUsers.filter((user) => user.id !== id);
        },
        addUser: (state, action: PayloadAction<{ user: User }>) => {
            const { user } = action.payload;
            state.users.push(user);
            state.filteredUsers = state.users.filter((existingUser) =>
                Object.keys(state.filters).every((key) =>
                    existingUser[key as keyof UsersState['filters']]
                        .toLowerCase()
                        .includes(state.filters[key as keyof typeof state.filters].toLowerCase()),
                ),
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
                state.filteredUsers = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch users';
            });
    },
});

export const { setFilter, removeUser, addUser } = usersSlice.actions;
export default usersSlice.reducer;
