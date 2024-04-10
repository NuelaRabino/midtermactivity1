<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td :class="{ 'verified': user.status === 'verified', 'for-verification': user.status === 'for_verification' }">{{ user.status }}</td>
          <td>
            <button v-if="user.status !== 'verified'" @click="changeStatus(user, 'verified')">Verify</button>
            <button v-if="user.status !== 'for_verification'" @click="changeStatus(user, 'for_verification')">Unverify</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['userAccounts']),
    users() {
      return this.userAccounts.filter(user => user.name !== 'Administrator');
    }
  },
  methods: {
    ...mapActions(['changeUserStatus']),
    changeStatus(user, newStatus) {
      user.status = newStatus;
      this.changeUserStatus({ userId: user.id, newStatus });
    },
    logout() {
      this.$store.commit('updateAuthenticationStatus', false);
      this.$store.commit('setUser', null);
      this.$router.push('/login');
    }
  }
};
</script>

<style>
.verified {
  color: green;
}

.for-verification {
  color: orange;
}
</style>
