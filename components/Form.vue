<template>
  <div class="questionnaire">
    <h1 class="logo">ISEKAI</h1>
    <p class="logo-present">Fill out questionnaire</p>

    <ValidationObserver v-slot="{ handleSubmit, invalid }" ref="observer">
      <form
        @submit.prevent="handleSubmit(submitForm)"
        autocomplete="off"
        class="form"
        ref="formTag"
      >
        <!-- I tried validate a custom component -->

        <!-- <ValidationProvider rules="email|required" v-slot="{ errors }">
          <BaseInput
            :value="form.email"
            :errors="errors"
            type="password"
            placeholder="Smth"
            @input="form.email = $event"
          />
        </ValidationProvider> -->

        <div class="form__user-info">
          <h2>Choose new name in new world!</h2>
          <ValidationProvider rules="email|required" v-slot="{ errors }">
            <div class="field-box">
              <input
                v-model="form.email"
                type="text"
                placeholder="Email..."
                value="form.email"
              />
              <span class="error-msg">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required" v-slot="{ errors }">
            <div class="field-box">
              <input v-model="form.name" type="text" placeholder="Name..." />
              <span class="error-msg">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>

        <div class="form__user-info">
          <h2>Write your motivation and wish list</h2>

          <ValidationProvider rules="min:20|required" v-slot="{ errors }">
            <div class="field-box">
              <textarea v-model="form.message" placeholder="Type message..." />
              <span class="error-msg">{{ errors[0] }}</span>
            </div>
          </ValidationProvider>
        </div>

        <div class="form__user-info--radio">
          <div class="form__user-info">
            <h2>How you want reborn ?</h2>

            <div class="form__radio-group">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupMurder"
                    class="btn-radio"
                    type="radio"
                    id="knife"
                    name="murder"
                    value="Murder from knife"
                  />
                  <label for="knife">Murder from knife</label>
                </div>

                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupMurder"
                    class="btn-radio"
                    type="radio"
                    id="van"
                    name="murder"
                    value="Van-kun"
                  />
                  <label for="van">Van-kun</label>
                </div>

                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupMurder"
                    class="btn-radio"
                    type="radio"
                    id="virtual"
                    name="murder"
                    value="Virtual game"
                  />
                  <label for="virtual">Virtual game</label>
                </div>

                <span class="error-msg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>

          <div class="form__user-info">
            <h2>Choose type of world</h2>

            <div class="form__radio-group">
              <ValidationProvider rules="required" v-slot="{ errors }">
                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupWorld"
                    class="btn-radio"
                    type="radio"
                    id="fantasy"
                    name="world"
                    value="Fantasy"
                  />
                  <label for="fantasy">Fantasy</label>
                </div>

                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupWorld"
                    class="btn-radio"
                    type="radio"
                    id="cyberpunk"
                    name="world"
                    value="Cyberpunk"
                  />
                  <label for="cyberpunk">Cyberpunk</label>
                </div>

                <div class="form__radio-group-item">
                  <input
                    v-model="form.radioGroupWorld"
                    class="btn-radio"
                    type="radio"
                    id="konosuba"
                    name="world"
                    value="Konosuba"
                  />
                  <label for="konosuba">Konosuba</label>
                </div>

                <span class="error-msg">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>

        <div class="form__user-info--upload">
          <h2>Pin up your photo (Optional)</h2>

          <ValidationProvider ref="uploadInput" v-slot="{ errors }">
            <input
              @change="uploadFile"
              class="input-upload"
              accept="image/*"
              type="file"
            />
            <span class="error-msg">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <ValidationProvider rules="required" v-slot="{ errors }">
          <div class="form__user-info--checkbox">
            <label class="checkbox">
              <input
                v-model="form.agreeConfirm"
                value="agree"
                type="checkbox"
              />
              I agree to the terms and conditions.
            </label>

            <span class="error-msg">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          slim
          rules="required|exact_length:1, Must select one"
          v-slot="{ errors }"
        >
          <label class="control-label">
            <strong>Day(s) of the week when u want to die</strong>
          </label>

          <div class="checkbox-group">
            <label class="checkbox-inline">
              <input type="checkbox" value="0" v-model="form.daysSelected" />
              Sunday
            </label>

            <label class="checkbox-inline">
              <input
                type="checkbox"
                value="sddsd"
                v-model="form.daysSelected"
              />
              Monday
            </label>

            <label class="checkbox-inline">
              <input
                type="checkbox"
                value="Tuesday"
                v-model="form.daysSelected"
              />
              Tuesday
            </label>

            <label class="checkbox-inline">
              <input
                type="checkbox"
                value="Wednesday"
                v-model="form.daysSelected"
              />
              Wednesday
            </label>

            <label class="checkbox-inline">
              <input
                type="checkbox"
                value="Thursday"
                v-model="form.daysSelected"
              />
              Thursday
            </label>

            <label class="checkbox-inline">
              <input
                type="checkbox"
                value="Friday"
                v-model="form.daysSelected"
              />
              Friday
            </label>
          </div>

          <span class="error-msg">{{ errors[0] }}</span>
        </ValidationProvider>

        <button class="form__btn" :disabled="invalid">Submit</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script setup>
import { ref } from "vue";
const uploadInput = ref(null);
const formTag = ref(null);

const form = {
  email: "",
  name: "",
  message: "",
  agreeConfirm: [],
  radioGroupMurder: "",
  radioGroupWorld: "",
  img: "",
  daysSelected: [],
};

async function uploadFile($event) {
  const target = await $event.target;

  if (target && target.files) {
    form.img = await target.files[0];
  }
}

function submitForm() {
  // const formData = new FormData();
  // ...

  console.log("registration", form);
}
</script>

<style lang="scss" scoped>
.questionnaire {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 10px;
}
.logo {
  letter-spacing: 2px;
  text-align: center;
}

.logo-present {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #cbc8c8;
  text-align: center;
  margin-bottom: 15px;
}
h2 {
  margin: 0 0 20px 0;
  font-size: 18px;
}

.form {
  &__btn {
    max-width: 920px;
    width: 100%;
    background: rgba(255, 156, 6, 0.8);
    border: none;
    padding: 34px 0;
    font-size: 24px;
    color: white;
    cursor: pointer;
    transition: 0.25s;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 20px;

    &:hover {
      background: rgba(255, 156, 6, 1);
    }

    &:disabled {
      cursor: default;
      background: rgba(255, 156, 6, 0.3);
    }
  }

  &__user-info--radio {
    display: flex;
    column-gap: 50px;
    justify-content: space-between;
  }

  &__radio-group {
    display: flex;
    flex-direction: column;

    &-item {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  &__user-info--checkbox {
    margin: 20px 0;
  }
}

.field-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input,
  textarea {
    width: 100%;
    background-color: #dfa143;
    background: rgba(223, 161, 67, 0.5);
    border: none;
    border-radius: 10px;
    text-indent: 24px;
    font-size: 20px;
    font-weight: bold;

    &::placeholder {
      color: white;
    }
  }

  input {
    height: 74px;
  }

  textarea {
    min-height: 150px;
    resize: none;
    padding-top: 24px;
  }
}

.btn-radio {
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid orange;
  border-radius: 50%;
  transform: translateY(-0.075em);
  cursor: pointer;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em orange;
  }
}

.error-msg {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.input-upload {
  padding: 25px 0;
  width: 100%;
  background: none;
  color: #dfa143;
  border: 1px solid #dfa143;
}

.checkbox-group {
  display: flex;
  flex-direction: column;

  .checkbox-inline {
    margin-bottom: 10px;
  }
}

.control-label {
  display: block;
  margin-top: 20px;
}
</style>
