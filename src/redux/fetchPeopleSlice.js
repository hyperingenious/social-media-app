import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPeopleAll } from "../services/fetchPeople";

export const fetchAllPeople = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const allPeople = await getPeopleAll();

    console.log(allPeople);

    return allPeople;
  }
);

const initialState = {
  profileData: {
    id: 0,
    name: "Saurav Meghwal",
    username: "sauravmeghwal",
    avatar:
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
  },
  allPeople: null,
  allPosts: null,
  status: "idle", // idle | pending | error
  following: [2, 4, 1],
  followers: [1, 2, 3],
  posts: [
    {
      id: 0,
      postId: "sdod983nde3be9eidndsins98dnsisk88",
      name: "Saurav Meghwal",
      username: "sauravmeghwal",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
      tweet: "Enjoying a day in the countryside!",
      comments: [
        "Any scenic views?",
        "Wildlife sightings?",
        "Peaceful moments?",
      ],
      like_count: 17,
      comment_count: 3,
    },
    {
      id: 0,
      postId: "jshd882ndk1s9a8n2dh8sajndk98ndn",
      name: "Saurav Meghwal",
      username: "sauravmeghwal",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
      tweet: "Completed a challenging workout!",
      comments: [
        "What exercises did you do?",
        "Tips for staying motivated?",
        "Fitness goals?",
      ],
      like_count: 29,
      comment_count: 3,
    },
    {
      id: 0,
      postId: "dkajhd72h84n2dj9anwiuehd74bda8",
      name: "Saurav Meghwal",
      username: "sauravmeghwal",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
      tweet: "Trying out a new hobby: photography!",
      comments: [
        "What's your camera?",
        "Share some photos!",
        "Photography tips?",
      ],
      like_count: 14,
      comment_count: 3,
    },
    {
      id: 0,
      postId: "8a2hd7db2k7s9d8b2m8slj9ak2k2hns",
      name: "Saurav Meghwal",
      username: "sauravmeghwal",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
      tweet: "Saw a breathtaking sunset today.",
      comments: [
        "Where did you see it?",
        "Nature's beauty!",
        "Capture any photos?",
      ],
      like_count: 32,
      comment_count: 3,
    },
    {
      id: 0,
      postId: "2jndiajdn92kdnajdni923kndjv92b0",
      name: "Saurav Meghwal",
      username: "sauravmeghwal",
      avatar:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Round&hairColor=PastelPink&facialHairType=BeardMajestic&facialHairColor=Platinum&clotheType=BlazerShirt&clotheColor=Red&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Light",
      tweet: "Movie night with the family!",
      comments: [
        "What movie did you watch?",
        "Favorite family traditions?",
        "Fun evening!",
      ],
      like_count: 22,
      comment_count: 3,
    },
  ],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    toggleFollowing(state, action) {
      if (action.payload.method === "follow") {
        state.following.push(action.payload.user_id);
      } else {
        state.following = state.following.filter(
          (item) => item !== action.payload.user_id
        );
      }
    },
    addComment(state, action) {
      state.allPosts[
        state.allPosts.findIndex(
          (post) => post.postId === action.payload.postId
        )
      ].comments.unshift(action.payload.comment);
    },
    increaseLike(state, action) {
      if (action.payload.method) {
        state.allPosts[
          state.allPosts.findIndex(
            (post) => post.postId === action.payload.postId
          )
        ].like_count++;
      } else {
        state.allPosts[
          state.allPosts.findIndex(
            (post) => post.postId === action.payload.postId
          )
        ].like_count--;
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPeople.fulfilled, (state, action) => {
        state.allPeople = action.payload.map(
          ({ id, name, username, avatar }) => {
            return {
              id,
              name,
              username,
              avatar,
            };
          }
        );

        const filterdForPosts = action.payload.map((data) =>
          data.post.map((post) => {
            return {
              postId: post.postId,
              id: data.id,
              name: data.name,
              username: data.username,
              avatar: data.avatar,
              tweet: post.tweet,
              like_count: post.like_count,
              comment_count: post.comment_count,
              comments: post.comments,
            };
          })
        );

        const finalPost = [];
        filterdForPosts.forEach((post) => {
          post.forEach((subPost) => finalPost.push(subPost));
        });

        state.allPosts = finalPost;
        state.status = "idle";
      })
      .addCase(fetchAllPeople.rejected, (state) => {
        state.status = "error";
      }),
});

export default peopleSlice.reducer;
export const { toggleFollowing, addComment } = peopleSlice.actions;
