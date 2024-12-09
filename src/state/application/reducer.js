import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  openModal: null,
  config: null,
  user: null,
  openFilter: false,
  lessonMenu: false,
  lessonMenuToggleStatus: true,
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload
    },
    updateConfig(state, action) {
      state.config = action.payload
    },
    updateUser(state, action) {
      state.user = action.payload
    },
    updateOpenFilter(state, action) {
      state.openFilter = action.payload
    },
    updateLessonMenu(state, action) {
      state.lessonMenu = action.payload
    },
    updateLessonMenuToggleStatus(state, action) {
      state.lessonMenuToggleStatus = action.payload
    },
  },
})

export const { updateConfig, updateUser, updateOpenFilter, setOpenModal, updateLessonMenu, updateLessonMenuToggleStatus } = applicationSlice.actions
export default applicationSlice.reducer
