<template>

</template>

<script>
export default {
	mounted() {
		if (this.$auth.user.role == "OW") {
            this.$router.push('/dashboard/company')
        } else {
            this.$router.push('/dashboard/investor')
        }
	}
}
</script>