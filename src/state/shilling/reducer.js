import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  requiredSkills: null,
  experience: null,
  sortBy: '',
}

const shillingSlice = createSlice({
  name: 'shilling',
  initialState,
  reducers: {
    setRequiredSkills(state, action) {
      state.requiredSkills = action.payload
    },
    setExperience(state, action) {
      state.experience = action.payload
    },
    setSortBy(state, action) {
      state.sortBy = action.payload
    },
  },
})

export const { setRequiredSkills, setExperience, setSortBy } = shillingSlice.actions
export default shillingSlice.reducer
