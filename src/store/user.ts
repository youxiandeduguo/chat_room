import { defineStore } from "pinia";

interface UserState {
  username: string;
  userid: number;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => {
    const savedState = JSON.parse(localStorage.getItem('userStore') || 'null') || {
      username: '',
      userid: 0,
    };
    console.log('Initial state:', savedState);
    return savedState;
  },
  actions: {
    updateUser(username: string, userid: number) {
      this.username = username;
      this.userid = userid;
      this.saveState();
    },
    saveState() {
      console.log('Saving state:', this.$state);
      localStorage.setItem('userStore', JSON.stringify(this.$state));
    },
  },
});