use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen(getter_with_clone)]
#[derive(Serialize, Deserialize)]
pub struct User {
  pub id: String,
  pub email: String,
  pub name: String,
  pub created_at: String,
}
