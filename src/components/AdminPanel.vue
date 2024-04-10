<template>
  <div class="container mx-auto py-8">
    <table class="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Status</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="border-b border-gray-300">
          <td class="px-4 py-2">{{ user.name }}</td>
          <td class="px-4 py-2" :class="{ 'text-green-500': user.status === 'verified', 'text-yellow-500': user.status === 'for_verification' }">{{ user.status }}</td>
          <td class="px-4 py-2">
            <button v-if="user.status !== 'verified'" @click="changeStatus(user, 'verified')" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Verify</button>
            <button v-if="user.status !== 'for_verification'" @click="changeStatus(user, 'for_verification')" class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Unverify</button>
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
