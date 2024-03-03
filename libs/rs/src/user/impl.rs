use chrono::Utc;
use uuid::Uuid;
use wasm_bindgen::JsValue;
use wasm_bindgen::prelude::wasm_bindgen;
use crate::user::r#struct::User;

#[wasm_bindgen]
impl User {
  #[wasm_bindgen]
  pub fn generate(email: &str, name: &str) -> User {
    User {
      id: Uuid::new_v4().to_string(),
      email: email.to_string(),
      name: name.to_string(),
      created_at: Utc::now().to_string(),
    }
  }

  #[wasm_bindgen(constructor)]
  pub fn new(email: &str, name: &str) -> User {
    User {
      id: Uuid::new_v4().to_string(),
      email: email.to_string(),
      name: name.to_string(),
      created_at: Utc::now().to_string(),
    }
  }

  #[wasm_bindgen]
  pub fn to_json(&self) -> JsValue {
    serde_wasm_bindgen::to_value(&self).unwrap()
  }
}
