import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface PostsState {
    posts: Post[];
    filteredPosts: Post[];
    loading: boolean;
    error: string | null;
    filters: {
        userId: number | undefined;
    };
}

const initialState: PostsState = {
    posts: [],
    filteredPosts: [],
    loading: false,
    error: null,
    filters: {
        userId: undefined,
    },
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await response.json();
    return result as Post[];
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setFilter: (
            state,
            action: PayloadAction<{ key: keyof PostsState['filters']; value: number }>,
        ) => {
            const { key, value } = action.payload;
            if (!value) {
                state.filteredPosts = state.posts;
                return;
            }
            state.filters[key] = value;
            state.filteredPosts = state.posts.filter((post) => post[key] === value);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                state.filteredPosts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch posts';
            });
    },
});

export const { setFilter } = postsSlice.actions;
export default postsSlice.reducer;
